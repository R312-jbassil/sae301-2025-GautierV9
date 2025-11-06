/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1897857566")

  // remove field
  collection.fields.removeById("number1474119008")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1897857566")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number1474119008",
    "max": null,
    "min": null,
    "name": "Prix",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
