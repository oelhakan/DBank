import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank{
  stable var currentValue : Float = 300;
  // currentValue := 300;

  // stable var startTime = Time.now();
  // startTime := Time.now();

  public func deposit(amount: Float){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdraw(amount: Float){
    let tempValue : Float = currentValue-amount;
    if(tempValue >= 0){
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    }else{
      Debug.print("Can not withdraw. Amount > Current Value");
    }
  };

  public query func checkBalance() : async Float {
    return currentValue;
  }; 

  public func compound(years: Nat){
    // let currentTime = Time.now();
    // let timeElapsedNS = currentTime - startTime;
    // let timeElapsedS = timeElapsedNS/1000000000;
    currentValue := currentValue * ((1 + (0.05 * Float.fromInt(years))) ** Float.fromInt(years));
  };

}
