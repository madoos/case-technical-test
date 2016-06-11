class PopulationCensus {

	constructor() {
	 this.provinces = ['Alava','Albacete','Alicante','Almería','Asturias','Avila','Badajoz','Barcelona','Burgos','Cáceres',
						'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
						'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
						'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
						'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza'
						];
	}

	getFakeCensus(){
		var self = this;
		//var randomYear = 0 | self.getRandomNumber(1999, 2012);
		var date = self.randomDate(new Date(2016, 0, 1), new Date());

		return this.provinces.map( function(province){
			return {
				date,
				ts :( function(){return date.getTime();} )() ,
				city: province,
				population: self.getRandomPopulation()
			};

		});
	}

	getRandomPopulation(){
		const LifeExpectancy = 83;
		var ages = Array.apply( 0, Array(LifeExpectancy) ).map( (x, y) => { return y + 1; } );

		var Fakepopulation = ages.map( (age) => {
			return {
				age,
				count: 0 | Math.random() * 10000
			};
		});

		return Fakepopulation;
	}

	randomDate(start, end) {
	    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
	}

	getRandomNumber(min, max) {
	  return Math.random() * (max - min) + min;
	}
}


const populationCensus = new PopulationCensus();

export default populationCensus;
