/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3620903986")

  // remove field
  collection.fields.removeById("relation3704136974")

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation1874259707",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "commanditaire",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3620903986")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_114470560",
    "hidden": false,
    "id": "relation3704136974",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Commanditaire",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("relation1874259707")

  return app.save(collection)
})
