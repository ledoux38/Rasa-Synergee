# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

# from typing import Any, Text, Dict, List
#
# from rasa_sdk import Action, Tracker
# from rasa_sdk.executor import CollectingDispatcher
#
#
# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message(text="Hello World!")
#
#         return []

# EXPLICATIONS
# Ce fichier est pour les actions personnalisées.
# Il contient le code Python pour les actions qui ne peuvent pas être gérées par des réponses simples.
# Par exemple, des actions qui font des requêtes API, des requêtes à une base de données, ou des calculs complexes.


from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet

class ActionCreateStore(Action):

    def name(self) -> Text:
        return "action_create_store"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        store_name = tracker.get_slot('store_name')
        store_location = tracker.get_slot('store_location')

        # Ici, ajoutez la logique pour créer un magasin dans votre système.
        # Par exemple, en faisant une requête à votre API ou base de données.

        dispatcher.utter_message(text=f"Le magasin '{store_name}' a été créé à '{store_location}'.")

        return []