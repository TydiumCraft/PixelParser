const EntityEvent = require('./entityEvent')

module.exports = class EntityDeathEvent extends EntityEvent {
	constructor(data) {
		super(data)
	}

	toString() {
		return `${this.entity} died via ${this.entity.killer}`
	}
}