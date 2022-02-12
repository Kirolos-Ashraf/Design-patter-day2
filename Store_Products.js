// Consider that we have A store that sell products and  every day the store put new products into the store and the store
//    want to let every people that interested with store that new product is in the store now. ( observable design patter)

// iam using observable design patter to handle question

class Store{

	constructor(){
		this.productName = ""
		this.people = []
	}

	placeNewProduct(title){
		this.productName = title 
		this.notifyAll()
	}

	notifyAll(){
		return this.people.forEach(person => person.update(this))
	}

	followingStore(person){
		this.people.push(person)
	}
}


class  People {
	update(product){
		// console.log(Channel)
		console.log(`new product added name:  ${product.productName}`)
	}
}




const myStore = new Store()

const kero = new People()
myStore.followingStore(kero)

const ahmed = new People()
myStore.followingStore(ahmed)

myStore.placeNewProduct("test product ")



const ali = new People()
myStore.followingStore(ali)


myStore.placeNewProduct("new sec product")




