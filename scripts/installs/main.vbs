Option Explicit
Dim fso, folder, shell
Set fso = CreateObject("Scripting.FileSystemObject")
Set folder = fso.GetFolder(".")
Set shell = CreateObject("WScript.Shell")

If fso.FolderExists(folder.Path & "\node_modules") Then
    WScript.Echo "node_modules folder already exists"
Else
    WScript.Echo "node_modules folder does not exist"
    WScript.Echo "running npm i"
    shell.Run "npm i", 1, True
End If
