import { cartitem } from "./cartitem";

export class cart{
    constructor(){}
    items:cartitem[]=[];
    get totalprice():number{
        let totalprice =0;
        this.items.forEach(item => {
            totalprice += item.price;

        });
        return totalprice;
    }

}