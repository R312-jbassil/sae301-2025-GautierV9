/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3620903986")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3758190954",
    "hidden": false,
    "id": "relation2689542515",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Lunettes",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3620903986")

  // remove field
  collection.fields.removeById("relation2689542515")

  return app.save(collection)
})
