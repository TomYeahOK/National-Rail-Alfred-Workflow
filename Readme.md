# National Rail Alfred Workflow

## Purpose
This workflow was designed to allow me to quickly check when the next available train(s) are.


## Usage
The keyword is t

It takes in two simple parameters, with a slash between them:
DEPART/DESTINATION

…where DEPART and DESTINATION are your departing and arriving stations (obviously).

You can enter the full name of stations, e.g.
```
t Bristol Temple Meads / Manchester Piccadilly.
```
But what I tend to do is write the standard station ID (which are easy to remember if your routes stay vaguely similar), so the above example would become:
```
t BRI/MAN
```

## Scope
This isn’t particularly clever code. It just launches a web browser showing the appropriate details (this seemed better than pulling via API because the page should notify you if there are any major disruptions, etc.
