/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3758190954")

  // remove field
  collection.fields.removeById("text3502120666")

  // remove field
  collection.fields.removeById("text489993838")

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1897857566",
    "hidden": false,
    "id": "relation3502120666",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Materiaux_Monture",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1897857566",
    "hidden": false,
    "id": "relation489993838",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Materiaux_Branches",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3758190954")

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

  // remove field
  collection.fields.removeById("relation3502120666")

  // remove field
  collection.fields.removeById("relation489993838")

  return app.save(collection)
})
