export class Product {
  constructor(id, name, img, alt, price, info, stock) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.alt = alt;
    this.price = price;
    this.info = info;
    this.stock = stock;
  }

  static inStock(product) {
    if (product.stock > 0) {
      return true;
    }
    return false;
  }
}

class Tyres extends Product {
  constructor(id, name, img, alt, price, info, stock, type) {
    super(id, name, img, alt, price, info, stock);
    this.type = type;
  }
}

class Exhaust extends Product {
  constructor(id, name, img, alt, price, info, stock, type) {
    super(id, name, img, alt, price, info, stock);
    this.type = type;
  }
}

class Brakes extends Product {
  constructor(id, name, img, alt, price, info, stock, type) {
    super(id, name, img, alt, price, info, stock);
    this.type = type;
  }
}

class Seats extends Product {
  constructor(id, name, img, alt, price, info, stock, type) {
    super(id, name, img, alt, price, info, stock);
    this.type = type;
  }
}

class Battery extends Product {
  constructor(id, name, img, alt, price, info, stock, type) {
    super(id, name, img, alt, price, info, stock);
    this.type = type;
  }
}

class WindshieldWipers extends Product {
  constructor(id, name, img, alt, price, info, stock, type) {
    super(id, name, img, alt, price, info, stock);
    this.type = type;
  }
}

export { Tyres, Exhaust, Brakes, Seats, Battery, WindshieldWipers };
