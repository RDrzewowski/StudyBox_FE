(function () {
  'use strict';

  angular
    .module('deck')
    .service('DeckService', DeckService);

  /** @ngInject */
  function DeckService() {
    var deckName;
    var deckObj;
    return {
      setDeckName: setDeckName,
      getDeckName: getDeckName,
      setCardObj: setCardObj,
      getCardObj: getCardObj
    };

    function setDeckName(name) {
      deckName = name
    }
    function getDeckName() {
      return deckName
    }
    function setCardObj(obj) {
      deckObj = obj
    }
    function getCardObj() {
      return deckObj
    }
  }
})();