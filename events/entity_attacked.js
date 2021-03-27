const Entity = require("../classes/entity");
const Player = require("../classes/player");
const EntityEvent = require("./entityEvent");

module.exports = class EntityAttackedEvent extends EntityEvent {
	constructor(data) {
		super(data)
		/** The entity who attacked the other */
		this.attacker = Entity.get(data.damager)
		/** The amount of damage dealt after armor damage reductions */
		this.damage = data.damage
		/** The amount of damage dealt before any damage reductions */
		this.raw_damage = data.raw_damage
		/** 
		 * The cause of this event
		 * @type {(
		 * 		"block_explosion"
		 * 		|"contact"
		 * 		|"cramming"
		 * 		|"custom"
		 * 		|"dragon_breath"
		 * 		|"drowning"
		 * 		|"dryout"
		 * 		|"entity_attack"
		 * 		|"entity_explosion"
		 * 		|"entity_sweep_attack"
		 * 		|"fall"
		 * 		|"falling_block"
		 * 		|"fire"
		 * 		|"fire_tick"
		 * 		|"fly_into_wall"
		 * 		|"hot_floor"
		 * 		|"lava"
		 * 		|"lightning"
		 * 		|"magic"
		 * 		|"melting"
		 * 		|"poison"
		 * 		|"projectile"
		 * 		|"starvation"
		 * 		|"suffocation"
		 * 		|"suicide"
		 * 		|"thorns"
		 * 		|"void"
		 * 		|"wither"
		 * )}
		 */
		this.cause = data.cause
		
		if (this.attacker instanceof Player && !this.categories.includes('player')) {
			this.categories.push('player')
		}
	}

	/**
	 * Gets the locations to use in this event for filtering
	 * @returns {Location[]}
	 */
	getLocations() {
		return [this.attacker,this.entity]
	}
	
	/**
	 * Gets an array of all the names of entities involved in this event
	 * @returns {String[]}
	 */
	getNames() {
		return [this.entity.name, this.attacker.name]
	}

	toString() {
		return `${this.attacker} attacked ${this.entity} via ${this.cause} for ${this.damage} damage`
	}
}