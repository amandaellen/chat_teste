 // Setup Firebase
var config = {
    apiKey: "AIzaSyBLgVn4tRGbPa24gcWRVXmyMjaeRaFsjuc",
    authDomain: "testechat-c9187.firebaseapp.com",
    databaseURL: "https://testechat-c9187.firebaseio.com",
    projectId: "testechat-c9187",
    storageBucket: "testechat-c9187.appspot.com",
    messagingSenderId: "904174586172"
  };

  firebase.initializeApp(config);

  var msg = firebase.database().ref('mensagens');

 var list = new Vue ({
    el: "#list_group",
    data: {
        list: {
            group : [
                {
                    name: "Rubens"
                },
                {
                    name: "Fernando"
                }

            ]
        },
        newMessage: {
          mensagem: '',
        }
    },
    firebase: {
    mensagens: msg
      },
      // computed property for form validation state
      computed: {
        validation: function () {
          return {
            mensagem: !!this.newMessage.mensagem.trim(),
          }
        },
        isValid: function () {

        }
      },
      // methods
      methods: {
        addMessage: function () {
            this.newMessage.mensagem = ''
        }
      }
 });






