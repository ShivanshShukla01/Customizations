### To create a Seamless Transition

```autohotkey
F10::

;enter width for left or right animation
;enter height for up or down animation
sizeOfCanvas = 96
numberOfPixelShift = 2  

directionOfPixelShift = u
; l = left, r = right, u = up, d = down

numberofLoop := (sizeOfCanvas / numberOfPixelShift) - 1
sleepTimer = 100

Loop, %numberOfLoop%
{
    Send, !n ;create new frame copy of current frame
    Send, ^a ;select all
    
    loop, %numberOfPixelShift%
    {
        Send, !e ;open edit panel
        Sleep, sleepTimer
        Send, s ;open shift option panel
        Send, %directionOfPixelShift%
    }
}
return
```