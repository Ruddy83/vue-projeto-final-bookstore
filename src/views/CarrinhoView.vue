<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useCarrinhoStore } from "@/stores/carrinho.js";

export default {
    computed: {
        ...mapStores(useCarrinhoStore),
        ...mapState(useCarrinhoStore, ["carrinho"]),
    },
    methods: {
        ...mapActions(useCarrinhoStore, [
            "getCarrinho",
            "removeFromCarrinho",
        ]),
        finishPurchase() {
            alert("Pedido Realizado!");
        }
    },
    async mounted() {
        try {
            await this.getCarrinho();
        } catch (e) {
            alert(e);
        }
    },
    removeFromCart(bookstoreItem) {
        console.info(bookstoreItem);
        try {
            const msg = this.removeFromCarrinho(bookstoreItem);
            alert(msg);
        } catch (e) {
            alert("Ooops! Algo de errado!");
        }
    },
}
</script>



<style>
body {
  background-color: #d9d9d9;
  margin: 0;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #373337;
}
li {
  float: left;
}
li h1 {
  display: block;
  text-align: center;
  padding: 0.5vh;
  text-decoration: none;
  color: white;
}
#carrinho {
  float: right;
  text-align: center;
  padding: 0.5vh;
  text-decoration: none;
  color: white;
}
.container {
  margin: auto;
  width: 95%;
  height: 85vh;
  display: flex;
  flex-wrap: wrap;
}
.item1 {
  margin: 2.5%;
  background-color: #868585;
  text-align: center;
  font-size: 1.5em;
  width: 28%;
  align-items: center;
  text-align: left;
}
.item2 {
  margin: 2.5%;
  background-color: #868585;
  text-align: center;
  font-size: 1.5em;
  width: 28%;
  align-items: center;
  text-align: left;
}
table {
  font-family: arial, sans-serif;
  font-size: 10px;
  width: 100%;
  margin: auto;
  border-collapse: collapse;
}
tr {
  width: 100%;
}
td,th {
  text-align: left;
  color: #000000;
  padding: 15px;
}
tr:nth-child(odd) {
  background-color: #dddddd;
}
th {
  height: 5vh;
  background-color: #373337;
  color: white;
}
.posicao {
  width: 5%;
}
.info {
  width: 80%;
  border-style: none;
  height: 5%;
  float: left;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  margin-bottom: 5%;
  border-radius: 5px;
}
.optional {
  width: 80%;
  border-style: none;
  height: 15%;
  float: left;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  margin-bottom: 5%;
  border-radius: 5px;
}
.sectionName {
  margin: 0;
  color: white;
  height: 1%;
  height: 100%;
  width: 100%;
  margin-top: 5%;
}
.inputName {
  margin: 1px;
  font-size: 12px;
  height: 2%;
  margin-left: 10%;
}
.inputSection {
  width: 100%;
  height: 100%;
  margin-top: 5%;
}
.inputSectionName {
  width: 100%;
  background-color: #373337;
  height: 10%;
  text-align: center;
  display: flex;
}
.paymentCamp {
  width: 80%;
  height: 5%;
  font-size: 18px;
  margin-top: 5%;
  background-color: #d9d9d9;
  margin-left: 10%;
  padding-top: 2%;
  text-align: center;
  border-radius: 5px;
}
span {
  width: 100%;
}
.logoCarrinho {
  height: 8vh;
}
.logoNav {
  height: 8vh;
  float: left;
}
.addDelCarrinho {
  width: 40%;
  height: 40%;
}
.produto {
  width: 30%;
}
.quant {
  text-align-last: center;
  width: 15%;
}
.btn-remove {
    cursor: pointer;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position:relative;
  background-color: #f9f9f9;
  width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  border-radius: 5px;
  margin-bottom: 5px;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.infoDrop {
  width: 80%;
  border-style: none;
  height: 20px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2px;
  border-radius: 5px;
  background-color: white;
  border: solid black 1px;
}
.infoDropNum {
  width: 32%;
  border-style: none;
  height: 20px;
  margin-top: 2px;
  border-radius: 5px;
  background-color: white;
  border: solid black 1px;
}
.inputNameDropdown {
  margin: 0;
  font-size: 14px;
}
.cvvValidade {
  display: flex;
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5px;
  width: 80%;
}
.endButton {
  width: 80%;
  height: 5%;
  margin-left: 10%;
  margin-top: 5px;
  background-color: #373337;
  border: none;
  border-radius: 5px;
  color: white;
}
.endButton:hover {
  background-color: #7c90a0;
}
</style>