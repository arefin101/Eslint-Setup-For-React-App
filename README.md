### Create React App

Open terminal and 'cd' into the folder where you want your project to reside & enter the below command in your terminal:

```bash
npx create-react-app new-react-project
```

This will create a new folder called "new-react-project" and install everything required to start a new react application.

## Editor Setup

### Settings

Edit the VS Code settings.json file by simply go to File > Preferences > Settings > Workspace > Open Settings (JSON)

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": ["javascript"]
}
```

<img src="settings.PNG" alt="Line Feed" width="700">
