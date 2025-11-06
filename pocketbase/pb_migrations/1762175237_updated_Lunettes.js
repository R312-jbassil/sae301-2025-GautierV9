/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3758190954")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number4105839681",
    "max": null,
    "min": null,
    "name": "taille_verre",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3502120666",
    "max": 0,
    "min": 0,
    "name": "Materiaux_Monture",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text489993838",
    "max": 0,
    "min": 0,
    "name": "Materiaux_Branches",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3758190954")

  // remove field
  collection.fields.removeById("number4105839681")

  // remove field
  collection.fields.removeById("text3502120666")

  // remove field
  collection.fields.removeById("text489993838")

  return app.save(collection)
})
