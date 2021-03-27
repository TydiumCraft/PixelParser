const InventoryEvent = require('./inventoryEvent')

module.exports = class InventoryCloseEvent extends InventoryEvent {
	constructor(data) {
		super(data)
	}
	toString() {
		return `${this.player} closed ${this.inventory}`
	}
}