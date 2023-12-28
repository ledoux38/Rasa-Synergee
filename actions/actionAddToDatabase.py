import sqlite3

from rasa_sdk import Action


class ActionAddToDatabase(Action):
    def name(self):
        return "action_add_to_database"

    def run(self, dispatcher, tracker, domain):
        # Connexion à la base de données SQLite
        conn = sqlite3.connect('database/ma_base_de_donnees.db')

        try:
            # Ajouter une valeur dans la base de données
            conn.execute("INSERT INTO ma_table (colonne1) VALUES (?)", ('valeur',))
            conn.commit()
            dispatcher.utter_message(text="Valeur ajoutée en base de données.")
        except Exception as e:
            dispatcher.utter_message(text=f"Erreur lors de l'ajout en base de données : {e}")
        finally:
            conn.close()

        return []
