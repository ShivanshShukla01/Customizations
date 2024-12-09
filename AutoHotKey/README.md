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
;to control the volume with wheel
+WheelUp::Send {WheelLeft}
+WheelDown::Send {WheelRight}
#WheelUp::Volume_Up
#WheelDown::Volume_Down
#Numpad5::Volume_Up
#Numpad2::Volume_Down

;|------------------------------------------------------------------------------------------|
;WINDOW + Y 
#y::
    Run, "C:\Users\shiva\OneDrive\Pictures\Apps\Brave Profiles\Radha Krishn - Brave.lnk" "https://www.youtube.com/"
return

;WINDOW + SHIFT + y
#+y::
    Run, "C:\Users\shiva\OneDrive\Pictures\Apps\Brave Profiles\Coding - Brave.lnk" "https://www.youtube.com/"
return

;WINDOW + CONTROL + y
#^y:: 
    Run, "C:\Users\shiva\OneDrive\Pictures\Apps\Brave Profiles\Coding - Brave.lnk" --incognito https://www.youtube.com
return

;WINDOW + SHIFT + ALT + Y
^!+y::
    Run, "C:\Users\shiva\OneDrive\Pictures\Apps\Brave Profiles\Youtube - Brave.lnk"
return    

^+!o::
    Run,"C:\Users\shiva\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Code.lnk" "C:\Users\shiva\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\Shortcuts.ahk"
return

^+!r::
    Reload
return

;to run Everything App which is fantastic for quick searching
#s:: Run, "C:\Program Files\Everything\Everything.exe"

; |------------------------------------------------------------------------------------------|
;OPENING SOME WEBSITES USING Shortcuts

;CHATGPT
^!g::
    Run, "C:\Users\shiva\OneDrive\Pictures\Apps\Brave Profiles\Coding - Brave.lnk" "https://chatgpt.com/"
return

;META AI 
^!m::
    Run, "C:\Users\shiva\OneDrive\Pictures\Apps\Brave Profiles\Coding - Brave.lnk" "https://www.meta.ai/"
return

;BLACKBOX AI
^!b::
    Run, "C:\Users\shiva\OneDrive\Pictures\Apps\Brave Profiles\Coding - Brave.lnk" "https://www.blackbox.ai/"
return

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
