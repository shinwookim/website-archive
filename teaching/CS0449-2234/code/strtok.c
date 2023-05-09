/* strtok example */
#include <stdio.h>
#include <string.h>

int main ()
{
  char str[] =" This, a sample C-string.";
  char * tok;
  printf ("Input: \"%s\" splitting into tokens:\n",str);
  tok = strtok (str," ,.-");
  while (tok != NULL)
  {
    printf ("%s\n",tok);
    tok = strtok (NULL, " ,.-");
  }
  return 0;
}