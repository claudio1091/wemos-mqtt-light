# My Mood

## O que é?
Um projeto IoT para controle de uma fita RGB comum além de salvar os dados de temperatura e humidade do ambiente.

### Estrutura
* [__Firebase__](#firebase)
* [Hardware](#hardware)
* [WebApp (__ReacJS__)](#webapp)
* [Native App (__React Native__)](#native-app)

## Firebase
O Firebase é usado tanto como _realtime database_ como _hosting_.

##### _Realtime Database_ example
![Firebase Example](/images/firebase-example.png)


## Hardware
A cada 5 minutos é salvo a temperatura e humidade do ambiente no firebase. 
A cada 30seg faz a leitura no firebase para setar os modos e cores do RGB.

* __Wemos D1R1__
* Fita LED RGB
* DTH11


## WebApp
Apresentação dos dados de temperatura e humidade salvos no Firebase e manipulação da entrada de RBG para controle das luzes.

##### Executar WebApp
```
yarn install
yarn start
```

##### Hospedagem
A WebApp está hospedada no próprio Firebase, usando o _Firebase Hosting_.

```
yarn build
firebase init
firebase deploy
```