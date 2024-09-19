- Just create a `.ini` file anywhere 
- Copy and Paste the Code in the `.ini` file
- Locate it from the Rainmeter App from Windows System Tray
- And Load the File

```ini
[Rainmeter]
Author=mailmerge (analities.com) edited by riliaf@seznam.cz
BackgroundMode=0
Update=2
AlwaysOnTop=1

[Metadata]
Name=BatteryCorner
Author=mailmerge (analities.com) edited by riliaf@seznam.cz
Information=Before edit: Shows battery level and percentage in one color. After edit: Provides multiple useful features to monitor status of your notebook battery and change its power plans which are color distinguished. Also its only south east corner available now.
License=
Version=V2.1

;====================================================================VARIABLES==

[Variables]
Low=0.2
AC=0
Text=0
Font=Times New Roman

;=====================================================================MEASURES==

[MeasureAC]
Measure=Plugin
Plugin=PowerPlugin
PowerState=ACLINE
Substitute="1":"~","0":" "

[MeasurePercent]
Measure=Plugin
Plugin=PowerPlugin
PowerState=PERCENT

;=======================================================================METERS==

[MeterPercent]
Meter=String
MeasureName=MeasurePercent
Text=%1%
AntiAlias=1
FontColor=255,255,0,255
FontFace=Harlow Solid
;StringStyle=bold
StringAlign=CENTER
FontSize=30
X=160r
Y=0r
W=70
H=40
SolidColor=0,0,0,150

;=======================================================================METERS==

```