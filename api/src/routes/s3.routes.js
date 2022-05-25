module.exports = (app) => {
  var router = require("express").Router();
  const S3 = require("aws-sdk/clients/s3");
  const multer = require("multer");
  const upload = multer({ dest: "uploads/" });
  const crypto = require("crypto");
  const { promisify } = require("util");
  const randomBytes = promisify(crypto.randomBytes);

  const fs = require("fs");
  const path = require("path");

  const { ACCESS_KEY_ID, SECRET_ACCESS_KEY, AWS_REGION, S3_BUCKET } =
    process.env;

  const s3 = new S3({
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
    region: AWS_REGION,
  });

  router.post("/", upload.single("foto"), async (req, res) => {
    const stream = fs.createReadStream(req.file.path);

    const ext = path.extname(req.file.originalname).toLowerCase();

    let fileType = "";

    if (ext == ".png") {
      fileType = "image/png";
    } else if (ext == ".jpg" || ext == ".jpeg") {
      fileType = "image/jpg";
    } else {
      res.send({ data: "error" });
    }

    stream.on("error", function (err) {
      console.log("error in read stream: ", err);
      throw err;
    });

    const rawBytes = await randomBytes(16);
    const imageName = rawBytes.toString("hex");

    let params = {
      Bucket: S3_BUCKET,
      Body: stream,
      Key: imageName,
      ContentType: fileType,
    };
    const data = await s3.upload(params).promise();

    res.send({ data: data.Key });
  });

  router.get("/:key", async (req, res) => {
    const key = req.params.key;
    const imagen = await getImagen(key);
    res.send(imagen);
  });

  router.delete("/:key", async (req, res) => {
    try {
      const key = req.params.key;
      const data = await deleteImagen(key);
      res.send(data);
    } catch (err) {
      console.log(err.message);
    }
  });

  const getImagen = async (key) => {
    const url = s3.getSignedUrl("getObject", {
      Bucket: S3_BUCKET,
      Key: key,
      Expires: 100000,
    });
    return url;
  };

  deleteImagen = async (key) => {
    try {
      const bucketParams = { Bucket: S3_BUCKET, Key: key };
      const data = await s3
        .deleteObject(bucketParams)
        .promise()
        .then(() => {})
        .catch((err) => {
          console.log("errooor" + err);
        });
    } catch (err) {
      console.log("Error", err);
      return "error";
    }
  };

  app.use("/api/s3", router);
};
