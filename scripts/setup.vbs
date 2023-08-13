Option Explicit

Dim WshShell, oExec, strOutput
Set WshShell = CreateObject("WScript.Shell")

MsgBox "This script will install the dependencies and help you to setup your server."&vbLf&"Starting to install...", vbInformation, "Rednexie/mailer-template"

Set oExec = WshShell.Exec("cmd /c where node")
strOutput = oExec.StdOut.ReadAll
If InStr(strOutput, "node.exe") > 0 Then
  MsgBox "node.js runtime environment is installed. continuing...", vbInformation, "Rednexie/mailer-template"
Else
  MsgBox "node.js runtime environment is not installed, quitting...", vbCritical, "Rednexie/mailer-template"
  WScript.Quit
End If

Set oExec = WshShell.Exec("cmd /c where npm")
strOutput = oExec.StdOut.ReadAll
If InStr(strOutput, "npm.cmd") > 0 Then
  MsgBox "node package manager(npm) is installed, continuing...", vbInformation, "Rednexie/mailer-template"
Else
  MsgBox "node package manager(npm) is not installed, quitting...", vbCritical, "Rednexie/mailer-template"
  WScript.Quit
End If

' Install dependencies
WshShell.Run "npm i consoled.js@1.0.4 express fs express-rate-limit node-fetch@2.6.1", 1, True
MsgBox "Installation is done." & vbLf & "Thanks for using mailer-template", vbInformation, "Rednexie/mailer-template"
