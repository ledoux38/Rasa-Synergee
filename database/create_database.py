import sqlite3

# Créer (ou ouvrir si elle existe déjà) une base de données SQLite
conn = sqlite3.connect('ma_base_de_donnees.db')

# Créer une table si elle n'existe pas déjà
conn.execute('''CREATE TABLE IF NOT EXISTS ma_table
             (id INTEGER PRIMARY KEY AUTOINCREMENT,
             colonne1 TEXT,
             colonne2 TEXT)''')
conn.close()
