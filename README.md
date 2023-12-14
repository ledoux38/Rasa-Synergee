# Rasa-Synergee
voir les possibilités de rasa

# Installation
1- Installer pyenv

2- Installer python version 3.9 ```pyenv install 3.8.0```

3- Dans le dossier Rasa-Synergee taper ligne de commande ```pyenv local 3.9```

4- Si virtualenv n'est pas déjà installé, vous pouvez l'installer avec pip : ```pip install virtualenv```

5- Créer un environnement virtuel ```virtualenv venv```

6- Activer l'environnement virtuel ```source venv/bin/activate```

7- Installer Rasa ```pip install rasa```

8- initialiser Rasa ```rasa init```

# Test avec une interface
1- en ligne de commande lancer rasa (env) ```run --enable-api --cors "*"```

2- Ouvrir ```interface/index.html```

3- Faire des tests :)

# Ligne de commande utiles:
1- Rasa:

    - apprendre: ```rasa train```

    - Lancer: ```rasa shell```

