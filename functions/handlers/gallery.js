const { admin, db } = require('../util/admin');
const config = require('../util/config'); //fonksiyon olmadiginda config ve benzeri seyler {config}  seklinde degil de config diye parantezsiz olarak yaziliyor

exports.getImages = (req, res) => {
  db.collection('image')
    .orderBy('orderNo', 'desc')
    .orderBy('createdAt', 'desc')
    .get()
    .then((data) => {
      let image = [];
      data.forEach((doc) => {
        image.push({
          imageId: doc.id,
          type: doc.data().type,
          imageUrl: doc.data().imageUrl,
          createdAt: doc.data().createdAt,
          orderNo: doc.data().orderNo,
        });
      });
      return res.json(image);
    })
    .catch((err) => console.error(err));
};

exports.postImage = (req, res) => {
  let errors = {};
  if (req.body.imageUrl.trim() === '') {
    errors.imageUrl = 'imageUrl must not be empty';
  }

  if (req.body.orderNo === null) {
    errors.orderNo = 'orderNo must not be empty';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors: errors });
  }

  const newImage = {
    imageUrl: req.body.imageUrl,
    type: req.body.type,
    createdAt: new Date().toISOString(),
    orderNo: req.body.orderNo,
  };

  db.collection('image')
    .add(newImage)
    .then((doc) => {
      const image = newImage;
      image.imageId = doc.id;
      return res.json({ image });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err });
    });
};

exports.deleteImage = (req, res) => {
  const document = db.doc(`/image/${req.params.imageId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ message: 'image not found' });
      }
      return document.delete();
    })
    .then(() => {
      db.collection('image')
        .orderBy('orderNo', 'desc')
        .orderBy('createdAt', 'desc')
        .get()
        .then((data) => {
          let image = [];
          data.forEach((doc) => {
            image.push({
              imageId: doc.id,
              type: doc.data().type,
              imageUrl: doc.data().imageUrl,
              createdAt: doc.data().createdAt,
              orderNo: doc.data().orderNo,
            });
          });
          return res.json(image);
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ error: err.code });
    });
};

exports.updateImageUrls = async (req, res) => {
  const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/gallery/${req.params.imageId}.${req.params.imageExtension}?alt=media`;

  try {
    await db.doc(`/image/${req.params.imageId}`).update({ imageUrl: imageUrl });
    return res.json({
      message: 'Image uploaded successfully',
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.code });
  }
};
