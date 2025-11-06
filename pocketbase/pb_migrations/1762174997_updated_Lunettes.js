/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3758190954")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number1396272600",
    "max": null,
    "min": null,
    "name": "largeur_pont",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3758190954")

  // remove field
  collection.fields.removeById("number1396272600")

  return app.save(collection)
})
