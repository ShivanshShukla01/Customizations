## To Move Vertically Quickly using Ctrl + Up and Ctrl + Down arrow
This script basically let you move 5 lines at a time in Visual Studio.
- Install the Visual Commander Extension.
- Go to Extensions Tab >>> VCmd >>> Commands.
- Click on Add 2 times to create two files.
- Paste the code given below in them. 
	- Rename the 1st as MoveUp5 and 2nd as MoveDown5.
		- This is not a hard code rule, you can change it as well.
	- The language drop down menu must have `VB v4.0`.
Now that the scripts are ready, you can give them shortcuts:-
- Go to Tools Tab >>> Options >>> Environment >>> Keyboard.
- In the 'Show commands containing:' input field.
	- Type `Edit.ScrollLineUP` and click on Remove button.
	- Type `Edit.ScrollLineDown` and click on Remove button.
- Now to set the shortcut keys, in the same field.
	- Type `VCmd` and select the option `VCmd.Command01`.
		- Press the Shortcut keys in the respective input field and Cick on Assign.
	- Do the same for `VCmd.Command02` and assign the shortcut key for it as well.
- The command01 and command02 reflect the sequence in which the files created. 
- You can make sure the sequence and command number from the Commands window which can opened by following the second command.

#### MoveUp5
```VB
Imports EnvDTE
Imports EnvDTE80
Imports Microsoft.VisualBasic

Public Class C
	Implements VisualCommanderExt.ICommand

	Sub Run(DTE As EnvDTE80.DTE2, package As Microsoft.VisualStudio.Shell.Package) Implements VisualCommanderExt.ICommand.Run
		DTE.ExecuteCommand("Edit.LineUp")
		DTE.ExecuteCommand("Edit.LineUp")
		DTE.ExecuteCommand("Edit.LineUp")
		DTE.ExecuteCommand("Edit.LineUp")
		DTE.ExecuteCommand("Edit.LineUp")

	End Sub

End Class

```

#### MoveDown5
```VB
Imports EnvDTE
Imports EnvDTE80
Imports Microsoft.VisualBasic

Public Class C
	Implements VisualCommanderExt.ICommand

	Sub Run(DTE As EnvDTE80.DTE2, package As Microsoft.VisualStudio.Shell.Package) Implements VisualCommanderExt.ICommand.Run
		DTE.ExecuteCommand("Edit.LineDown")
		DTE.ExecuteCommand("Edit.LineDown")
		DTE.ExecuteCommand("Edit.LineDown")
		DTE.ExecuteCommand("Edit.LineDown")
		DTE.ExecuteCommand("Edit.LineDown")		
	End Sub

End Class

```
	

	