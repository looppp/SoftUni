package CarInfo;

public class Car {
    private String brand;
    private String model;
    private int horsePower;

    public Car(String brand, String model, int horsePower){
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }

    public Car(String brand){
        this.brand = brand;
        this.model = "unknown";
        this.horsePower = -1;
    }

    public String getInfo(){
        return String.format("The car is: %s %s - %d HP.", this.getBrand(), getModel(), getHorsePower());
    }

    public String getModel(){
        return model;
    }
    public String getBrand(){
        return brand;
    }
    public int getHorsePower(){
        return horsePower;
    }
    public void setModel(String model){
        this.model = model;
    }
    public void setBrand(String brand){
        this.brand = brand;
    }
    public void setHorsePower(int horsePower){
        this.horsePower = horsePower;
    }
}
