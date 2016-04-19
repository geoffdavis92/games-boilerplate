'use strict';

var _vendors = { stations: [{ name: 'Chicago, IL', hasOil: false }, { name: 'New York City, NY', hasOil: false }] }

var _interior = { field: { contains: 'oil', size: Math.ceil(Math.random() * 100) } }

var _shell = {
    search: {
        for: function(resource) {
            this.search = resource
            return this
        },
        at: function(location) {
            if (location.contains === this.search) {
                return true;
            } else {
              return false;
            }
        }
    },
    drill: {
        _speed: Math.ceil(Math.random() * 100),
        _error: (Math.floor(Math.random() * 100) % 3) === 1 ? true : false,
        _quality: parseFloat(Math.random().toString().substr(0, 4)),
        at: function(location) {
            agg = 0, count = 0
            do {
                // console.log(this.speed, location.size)
                if (this._error) {
                    count--
                    this._error = false
                } else {
                    count++
                }
                agg += this._speed
            } while (agg < location.size)
            console.log(count)
            return {
                count: Math.round((location.size / this._speed) * 100) / 100,
                quality: this._quality,
                yield: count
            }
        }
    },
    refine: function(extract) {
        var addRN = function() {
            var n = 0
            while (n + extract.quality < .66) {
                if (extract.yield > 0) {
                    n += Math.random() * .34
                    extract.yield -= 0.5
                } else {
                    break;
                }
            }
            return n
        }
        extract.quality = (extract.quality + addRN())
        extract.yield = extract.yield <= 0 ? .5 : extract.yield
        return {
            result: extract,
            then: function(callbackFn) {
                if (typeof callbackFn === 'function') {
                    return callbackFn(extract)
                } else {
                    console.error('Argument must be a function')
                }
            }
        }
    },
    ship: function(cargo) {
        return {
            cargo: cargo,
            to: function(destinations) {
                for (item in destinations) {
                    // console.log('CARGO CHECK: ',this.cargo)
                    destinations[item]['hasOil'] = true
                    destinations[item]['oilQuality'] = cargo.quality
                    destinations[item]['oilYield'] = cargo.yield
                    if (cargo.source) {
                      destinations[item]['oilSource'] = cargo.source
                    }
                }
                return destinations
            }
        }
    }
}

var _arabia = {
    oil: {
        volume: function() {
            return Math.floor(Math.random() * 5)
        },
        import: function() {
          var q = parseFloat((Math.random()*1.25).toString().substr(0, 4)),
              y = Math.ceil(Math.random() * 5)
          return {
            quality: q < .5 ? parseFloat((q+.5).toString().substr(0,4)) : q > 1 ? parseFloat((q-.27).toString().substr(0,4)) : q,
            source: 'Arabia',
            yield: y > 3 ? y - Math.floor(Math.random()*3) : y === 0 ? 1 : y
          }
        }
    }
}

var extract = void 0,
    processed = void 0;

if (_shell.drill.at(_interior.field).yield > _arabia.oil.volume()) {
  if (_shell.search.for('oil').at(_interior.field)) {
    console.log('drilling!');
    extract = _shell.drill.at(_interior.field);
    if (extract.quality > .66) {
      console.log('shipping extract!');
      (0, _shell.ship)(extract).to(_vendors.stations);
    } else {
      console.log('refining, then shipping!');
      (0, _shell.refine)(extract).then((0, _shell.ship)(processed).to(_vendors.stations));
    }
  }
} else {
  console.log('importing from Arabia!');
  (0, _shell.ship)(_arabia.oil.import()).to(_vendors.stations);
}

/*
var extract = void 0,
    processed = void 0,
    barrels = void 0;
if (_shell.drill.at(_interior.field).yield > _arabia.oil.volume()) {
    if (_shell.search.for('oil').at(_interior.field)) {
        extract = _shell.drill.at(_interior.field);
        if (extract.quality > .66) {
            (0, _shell.ship)(extract).to(_vendors.stations);
        } else {
            (0, _shell.refine)(extract).then(function(processed) {
                return function(barrels) {
                    return (0, _shell.ship)(barrels).to(_vendors.stations);
                };
            });
        }
    }
} else {
    (0, _shell.ship)(_arabia.oil.import()).to(_vendors.stations);
}
*/

/* ES6 version, using webpack ---

import { stations } from 'vendors'
import { field } from 'interior'
import { drill, refine, search, ship } from 'shell'
import { oil } from 'arabia'

let extract, processed
if (drill.at(field).yield > oil.import()) {
  if (search.for('oil').at(field)) {
    extract = drill.at(field)
    if ( extract.quality > .66 ) {
      ship(extract).to(stations)
    } else {
      refine(extract).then(ship(processed).to(stations))
    }
  }
} else {
 ship(oil.import()).to(stations)
}
*/