# AutoHotKey Scripts

- These Scripts are made and tested in AutoHotKey v2.
- These are general use-cases and you can generate more scripts to perform some task by asking AI(s).
- These are used in Windows so I have no idea if they are going to work in any other OS.
- In AutoHotKey, representation is as follows :
  - `#` - Windows Key
  - `+` - Shift Key
  - `!` - Alt Key
  - `^` - Control Key

# Setup

- Download the AutoHotKey v2 and Install it
- Create a new text file and Save it with `.ahk` instead of `.txt`
  - I prefer creating it in the Startup folder so that shortcuts works automatically every time you turn ON the computer.
  - To access the startup folder in Windows :-
    - `Win + r`
    - Search `shell:startup`
    - **OR**
    - directly go to 👉 `C:\Users\<YourUserName>\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup` in Windows Explorer
- Create the script as per your requirements.
- Save and Run it

# Scripts

### To control Volume using Mouse Wheel

```autohotkey
;to control the volume with wheel
#WheelUp::Volume_Up ;hold Win key and scroll
#WheelDown::Volume_Down
```

### To control Volume from keyboard if there is no Volume Control Key

```autohotkey
#Numpad5::Volume_Up ;hold Win key and the Num Lock must be ON
#Numpad2::Volume_Down
```

### To enable Horizontal Scrolling if not works by default

```autohotkey
+WheelUp::Send {WheelLeft} ;hold shift key and scroll
+WheelDown::Send {WheelRight}
```

### To adjust the Brightness from Mouse Wheel or Keyboard

- This might works in Laptops Only

```autohotkey
; hold Alt Key and either scroll Mouse Wheel or Use Numpad5 or Numpad2
!Numpad2::
  AdjustScreenBrightness(-10)
  Return
!Numpad5::
  AdjustScreenBrightness(10)
  Return
!WheelDown::
  AdjustScreenBrightness(-5)
  Return
!WheelUp::
  AdjustScreenBrightness(5)
  Return
AdjustScreenBrightness(step) {
    service := "winmgmts:{impersonationLevel=impersonate}!\\.\root\WMI"
    monitors := ComObjGet(service).ExecQuery("SELECT * FROM WmiMonitorBrightness WHERE Active=TRUE")
    monMethods := ComObjGet(service).ExecQuery("SELECT * FROM wmiMonitorBrightNessMethods WHERE Active=TRUE")
    minBrightness := 5  ; level below this is identical to this
    for i in monitors {
        curt := i.CurrentBrightness
        break
    }
    if (curt < minBrightness)  ; parenthesis is necessary here
        curt := minBrightness
    toSet := curt + step
    if (toSet > 100)
        return
    if (toSet < minBrightness)
        toSet := minBrightness
    for i in monMethods {
        i.WmiSetBrightness(1, toSet)
        break
    }
}
```

### To Open Websites or Folders with Shortcuts

**Syntax:**

```
<Key-combinations>::
    Run, "Path to the App with which you want to open" "Link to the file or website you want to open"
return
```

###### For Example

```autohotkey
;on clickng Ctrl + Shift + Alt + O -> This will open the autohotkey script in which you are going to save all this in VS code directly from anywhere to add or remove something
^+!o::
    Run,"C:\Users\<YourUserName>\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Visual Studio Code\Visual Studio Code.lnk" "C:\Users\shiva\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\Custom Shortcuts.ahk"
return

;to reload this autohotey script after making changes without need of going to the folder and run in from there
^+!r::
    Reload
return
```

### This is the Current Script I Use

```autohotkey
;to control the volume with wheel
+WheelUp::Send {WheelLeft}
+WheelDown::Send {WheelRight}
#WheelUp::Volume_Up
#WheelDown::Volume_Down
#Numpad5::Volume_Up
#Numpad2::Volume_Down

;|------------------------------------------------------------------------------------------|

#y::
    Run, "C:\Users\shiva\OneDrive\Documents\Apps\Brave Profiles\Radha Krishn - Brave.lnk" "https://www.youtube.com/"
return

#+y::
    Run, "C:\Users\shiva\OneDrive\Documents\Apps\Brave Profiles\Learning - Brave.lnk" "https://www.youtube.com/"
return

^+!o::
    Run,"C:\Users\shiva\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Visual Studio Code\Visual Studio Code.lnk" "C:\Users\shiva\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\Custom Shortcuts.ahk"
return

^+!r::
    Reload
return

;to run Everything App which is fantastic for quick searching
#s:: Run, "C:\Program Files\Everything\Everything.exe"

;|-----------------------------------------------------------------------------------------|

;to open several websites and Folders
#^y::
    ; Run Brave browser in private mode and open www.youtube.com
    Run, "C:\Users\shiva\OneDrive\Documents\Apps\Brave Profiles\Learning - Brave.lnk" --incognito "https://www.youtube.com"

return

^+1::Run, "C:\Users\shiva\OneDrive\Desktop\Notes"

^+2::Run, "C:\Users\shiva\OneDrive\Desktop\Classes\G1 Classes\ACC"

^+4::Run, "C:\Users\shiva\OneDrive\Desktop\Classes\G1 Classes\LAW"

^+3::Run, "C:\Users\shiva\OneDrive\Desktop\Classes\G1 Classes\TAX"

^+5::Run, "C:\Users\shiva\OneDrive\Desktop\Classes\G1 Classes\TAX (GST)"

^+6:: Run, "C:\Users\shiva\OneDrive\Documents\Apps\Brave Profiles\Learning - Brave.lnk" "https://drive.google.com/drive/folders/1_0V2eF9Cyz3Ep3xVFIgtpECX1xxkSLQU"

^+7:: Run "C:\Users\shiva\OneDrive\Desktop\Sections.drawio"

^+8:: Run, "C:\Users\shiva\OneDrive\Documents\Apps\Brave Profiles\Learning - Brave.lnk" "https://chatgpt.com/"

; |------------------------------------------------------------------------------------------|

;to adjust brightness
!Numpad2::
  AdjustScreenBrightness(-10)
  Return
!Numpad5::
  AdjustScreenBrightness(10)
  Return
!WheelDown::
  AdjustScreenBrightness(-5)
  Return
!WheelUp::
  AdjustScreenBrightness(5)
  Return
AdjustScreenBrightness(step) {
    service := "winmgmts:{impersonationLevel=impersonate}!\\.\root\WMI"
    monitors := ComObjGet(service).ExecQuery("SELECT * FROM WmiMonitorBrightness WHERE Active=TRUE")
    monMethods := ComObjGet(service).ExecQuery("SELECT * FROM wmiMonitorBrightNessMethods WHERE Active=TRUE")
    minBrightness := 5  ; level below this is identical to this
    for i in monitors {
        curt := i.CurrentBrightness
        break
    }
    if (curt < minBrightness)  ; parenthesis is necessary here
        curt := minBrightness
    toSet := curt + step
    if (toSet > 100)
        return
    if (toSet < minBrightness)
        toSet := minBrightness
    for i in monMethods {
        i.WmiSetBrightness(1, toSet)
        break
    }
}
;|------------------------------------------------------------------------------------------|

```
