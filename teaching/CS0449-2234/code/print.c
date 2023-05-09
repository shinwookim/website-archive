#include <stdio.h>

int main()
{
  char ch = 'A';
  char str[6] = "CS0449";
  float flt = 10.234;
  int num = 150;
  double dbl = 20.126456;

  printf("Character is %c \n", ch);
  printf("String is %s \n", str);
  printf("Float value is %f \n", flt);
  printf("Integer value is %d\n", num);
  printf("Double value is %f \n", dbl);
  printf("Octal value is %o \n", num);
  printf("Hexadecimal value is %x \n", num);
  return 0;
}
