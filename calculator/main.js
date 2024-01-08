let     result = document.querySelector(".result");
let     numbers = document.querySelectorAll(".numbers div");
let     opers = document.querySelectorAll(".operations div");
const   pressEgale = document.querySelector(".submit");
let res = "";
let stack = [];

let output = "";

numbers.forEach(element => {
    element.addEventListener("click", (e) => {
        result.textContent = "";
        output += element.textContent;
        result.textContent = output;
        stack.push((element.textContent));
    });
});

opers.forEach(ele => {
    ele.addEventListener("click", () => {
        result.textContent = "";
        output += ele.textContent;
        result.textContent = output;
        stack.push(ele.textContent);
    });
});

function parseTheExpression()
{
    for (let i = 0; i + 1 < stack.length; i++)
    {
        if (isNaN(Number(stack[i])) && isNaN(Number(stack[i + 1])))
            return (-1);
    }
    return (0);
}

let dataNumbers = [];
let operators = [];
pressEgale.addEventListener("click", () => {
    output = "";
    if (stack[0] == "*" || stack[0] == "/" || isNaN(Number(stack[stack.length - 1])))
        result.textContent = "malformed expression!!";
    else
    {
        if (parseTheExpression() == -1)
        {
            result.textContent = "malformed expression!!";
            return;
        }
        let i = 0;
        if (stack[0] == "=" || stack[0] == "-")
        {
            i = 1;
            res += stack[0];
        }
        for (; i < stack.length; i++)
        {
            let num = Number(stack[i]);
            if (isNaN(num))
            {
                dataNumbers.push(Number(res));
                res = "";
                operators.push(stack[i]);
            }
            else
            {
                res += stack[i];
            }
        }
        if (res.length > 0)
            dataNumbers.push(Number(res));
        let j = 0;
        for (let i = 0; i + 1 < dataNumbers.length; i++)
        {
            if (operators[j] == "+")
            {
                output = dataNumbers[i] + dataNumbers[i + 1];
                dataNumbers[i + 1] = output;
            }
            else if (operators[j] == "-")
            {
                output = dataNumbers[i] - dataNumbers[i + 1];
                dataNumbers[i + 1] = output
            }
            else if (operators[j] == "*")
            {
                output = dataNumbers[i] * dataNumbers[i + 1];
                dataNumbers[i + 1] = output
            }
            else if (operators[j] == "/")
            {
                if (dataNumbers[i + 1] == 0)    
                {
                    result.textContent = "can't divide by 0 !!";
                    return;
                }
                output = dataNumbers[i] / dataNumbers[i + 1];
                dataNumbers[i + 1] = output
            }
            j++;
        }
        result.textContent = output;
    }
    stack.length = 0;
    dataNumbers.length = 0;
    operators.length = 0;
    output = "";
    res = "";
});
