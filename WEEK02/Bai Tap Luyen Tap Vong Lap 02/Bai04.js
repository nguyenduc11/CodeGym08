function print_rectangle(rows, columns)
{
    let i, j;
    for (i = 1; i <= rows; i++)
    {
        for (j = 1; j <= columns; j++)
        {
            if (i == 1 || i == rows || j == 1 || j == columns)
                document.write("*");
            else
                document.write("+");
        }
        document.write("<br>");
    }
}

let input_rows = 40,
    input_columns = 80;
print_rectangle(input_rows, input_columns);



