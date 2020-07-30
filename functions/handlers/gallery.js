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
