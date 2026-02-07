// No migration needed as only hard-coded list changed, no persistent data types.
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  // Types
  type Category = {
    #oil;
    #spices;
    #sweets;
    #blends;
  };

  type Product = {
    id : Nat;
    name : Text;
    description : Text;
    priceCents : Nat;
    category : Category;
    imageUrl : Text;
    isAvailable : Bool;
  };

  type Order = {
    id : Nat;
    customer : {
      name : Text;
      email : Text;
      phone : Text;
      country : Text;
      address : Text;
      notes : ?Text;
    };
    products : [(Nat, Nat)]; // (productId, quantity)
    totalAmountCents : Nat;
    placedAt : Int;
  };

  // Persistent State
  let productsList = [
    {
      id = 0;
      name = "Pure Coconut Oil";
      description = "Traditional coconut oil made from sun-dried coconut kernels.";
      priceCents = 750;
      category = #oil;
      imageUrl = "/pure-coconut-oil.webp";
      isAvailable = true;
    },
    {
      id = 1;
      name = "Red Chilli Powder (Spicy)";
      description = "Authentic Kerala-style hot red chilli powder for extra spice.";
      priceCents = 225;
      category = #spices;
      imageUrl = "/red-chilli-powder.webp";
      isAvailable = true;
    },
    {
      id = 2;
      name = "Red Chilli Powder (Milder)";
      description = "Less spicy red chilli powder, perfect for traditional Kerala dishes.";
      priceCents = 225;
      category = #spices;
      imageUrl = "/red-chilli-powder-mild.webp";
      isAvailable = true;
    },
    {
      id = 3;
      name = "Turmeric Powder";
      description = "Natural turmeric powder with no additives for deep flavor and color.";
      priceCents = 225;
      category = #spices;
      imageUrl = "/turmeric-powder.webp";
      isAvailable = true;
    },
    {
      id = 4;
      name = "Coriander Powder";
      description = "Finely ground coriander powder for authentic Kerala curries.";
      priceCents = 215;
      category = #spices;
      imageUrl = "/coriander-powder.webp";
      isAvailable = true;
    },
    {
      id = 5;
      name = "Sarkara Varatti";
      description = "Traditional Kerala banana chips with a sweet jaggery coating.";
      priceCents = 185;
      category = #sweets;
      imageUrl = "/sarkara-varatti.webp";
      isAvailable = true;
    },
    {
      id = 6;
      name = "Sweet Diamond Cuts";
      description = "Crunchy fried biscuits dipped in sugar syrup, a Kerala tea time treat.";
      priceCents = 185;
      category = #sweets;
      imageUrl = "/sweet-diamond-cuts.webp";
      isAvailable = true;
    },
    {
      id = 7;
      name = "Non-Veg Masala Powder";
      description = "Special spice blend for Kerala non-vegetarian dishes.";
      priceCents = 230;
      category = #blends;
      imageUrl = "/non-veg-masala-powder.webp";
      isAvailable = true;
    },
    {
      id = 8;
      name = "Unda";
      description = "Traditional Kerala rice and coconut sweet balls. ";
      priceCents = 200;
      category = #sweets;
      imageUrl = "/unda.webp";
      isAvailable = true;
    },
    {
      id = 9;
      name = "Achappam";
      description = "Crispy and flower-shaped fried rice snack from Kerala.";
      priceCents = 220;
      category = #sweets;
      imageUrl = "/achappam.webp";
      isAvailable = true;
    },
    {
      id = 10;
      name = "Kozalappam";
      description = "Delicious and crunchy fried sweet rice stick from Kerala.";
      priceCents = 210;
      category = #sweets;
      imageUrl = "/kozalappam.webp";
      isAvailable = true;
    },
  ];

  let ordersMap = Map.empty<Nat, Order>();
  var nextOrderId = 0;

  // Public Queries & Updates
  public query ({ caller }) func getProducts() : async [Product] {
    productsList;
  };

  public query ({ caller }) func getProductById(id : Nat) : async Product {
    if (id >= productsList.size()) {
      Runtime.trap("Product not found. ");
    };
    productsList[id];
  };

  public shared ({ caller }) func placeOrder(customerData : Order) : async Nat {
    if (customerData.products.size() == 0) {
      Runtime.trap("Order must contain at least one product.");
    };

    ordersMap.add(nextOrderId, customerData);
    nextOrderId += 1;
    nextOrderId - 1;
  };

  public query ({ caller }) func getOrder(id : Nat) : async Order {
    switch (ordersMap.get(id)) {
      case (null) { Runtime.trap("Order not found. ") };
      case (?order) { order };
    };
  };

  public query ({ caller }) func getAllOrders() : async [Order] {
    ordersMap.values().toArray();
  };
};
