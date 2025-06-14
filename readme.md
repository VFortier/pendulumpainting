# Graphics

- 
- Create other drawing modes
-- With line with darker center
- Gallery : Option to draw on one or many "frame"
-- Shadow around canvas to show elevation
-- Paint only appears on frame


# UI
- Trim spaces on inputs
- Tooltips
- Start new pendulum button (to draw many pendulum on one frame)
- Start/stop button



# Later / Other project
- Workshop : Option to draw canvas being on top of a floor.
-- Shadow around canvas to show elevation
-- Slight change in color when paint lands on the floor
-- Messy floor with lots of paint would be nice


# Les 5 canvas de l'apophysis

- Extraire le main dans sa propre fonction
- Faire un branche
- Mettre un mode d'exécution instantanée
- Inclure dans l'interface avec une UX minimal vu que c'est yink pour moé
- Faire un mode "Les 5 canvas de l'apophysis"


## Éxecution instantanée
**Deux mode : Galois/Counter & automatic**

### Galois/Counter 
counter galois : nombre d'itérations dans la loop incluant "global speed" (aka le global speed n'a plus d'effet)
    (Le downside de ça est que )
Est-ce que l'exécution se termine un jour?

### Automatic
Prend un ou deux param :
- Min rotation speed
    (Quand rotation speed va plus bas que cette valeur, on arrête)
- Min radius
    (Quand x ou y radius va plus bas que cette valeur, on arrête)

Si les settings n'ont pas de Rotation Reduct Factor ou de Radius Reduct Speed, lancer une erreur.

## Éxecution instantanée
Input : tableau avec les tailles et offsets de chaque images