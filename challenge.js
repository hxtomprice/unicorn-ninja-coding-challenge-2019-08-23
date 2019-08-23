const unobstructedWestViewCount = buildings => {
  return buildings.reduce((visible, building) => {
    if (!visible.length || building < visible[0]) {
      return [ building, ...visible ]
    }
    return [ ...new Set(visible.map(v => building > v ? building : v)) ]
  }, []).length
}

module.exports = { unobstructedWestViewCount }
