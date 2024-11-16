import { type ExtensionContext, importVsCodeApi } from "@narumincho/vscode";

export function activate(context: ExtensionContext): void {
  const vscode = importVsCodeApi();
  if (vscode === undefined) {
    throw new Error(
      "Failed to import VS Code API. Please check your VS Code version.",
    );
  }

  console.log(
    "Musi language support is activated!",
  );

  const disposable = vscode.commands.registerCommand(
    "extension.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hello World!");
    },
  );

  context.subscriptions.push(disposable);
}
