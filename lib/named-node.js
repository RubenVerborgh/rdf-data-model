'use strict'

function NamedNode (iri) {
  this.value = iri
}

NamedNode.prototype.equals = function (other) {
  return other.termType === this.termType && other.value === this.value
}

NamedNode.prototype.termType = 'NamedNode'

module.exports = NamedNode
