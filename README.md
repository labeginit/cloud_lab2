# A web API with one end point /calc and three parameters
:operation  (possible values: add, sub, mul, div) 
:numberone  (int) 
:numbertwo  (int) 

**Returns a result of arithmetical calculation**

**Returns a *null* in case of wrong command or a non-integer number**

## Examples of use

<https://aqueous-mountain-06383.herokuapp.com/calc?operation=add&numberone=3&numbertwo=4>

<https://aqueous-mountain-06383.herokuapp.com/calc?operation=sub&numberone=8&numbertwo=4>

<https://aqueous-mountain-06383.herokuapp.com/calc?operation=mul&numberone=3&numbertwo=4>

<https://aqueous-mountain-06383.herokuapp.com/calc?operation=div&numberone=8&numbertwo=4>