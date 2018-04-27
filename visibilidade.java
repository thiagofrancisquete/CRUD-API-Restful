
/*
modificador de visibilidade indica o nivel de acesso aos componentes internos de uma classe
+ publico
- privado
# protegido
*/

LISTA ENCADEADA
- para cada novo elemento inserido na estrutura alocamos um espaço de memoria para armazena-lo
- o espaço total de memoria gasto pela estrutura é proporcional ao numero de elementos
- para percorrer todos os elementos da lista devemos explicitamente guardar o seu ENCADEAMENTO, o que é feito armazenando-se junto com a info de cada elemento, um ponteiro para o proximo elemento


CONTEUDO|endereço| -> ~proximo~ -> CONTEUDO|endereço|-> ~proximo~ -> CONTEUDO|endereço|

- a estrutura é uma sequencia encadeada de elementos
- elementos em geral sao chamados de NÓS da lista
- um NÓ da lista é representado por uma estrutura que contém conceitualmente dois campos, a informação armazenada e o ponteiro para o proximo d lista
- a lista é representada por um ponteiro para o primeiro elemento (ou nó)
- o ultimo nó armazena como proximo elemento, um ponteiro ivalido com valor null

9|endereço| -> ~proximo~ -> 10|endereço -> ~proximo~ -> 12|null


LISTA CIRCULAR
o ultimo elemento NÓ da lista, formando o ciclo
essa é a diferença entre uma lista encadeada é uma CIRCULAR

LISTA DUPLAMENTE ENCADEADA
- nelas cada elemento (NÓ) tem um ponteiro para o próximo elemento e um ponteiro para o elemento anterior
- se tirarmos um ponteiro para o ultimo nó da lista, podemos percorrer a lista em oderm inversa
- o primeiro nó da lista nao tem um elemento anterior (seu ponteiro vale NULL)


LISTA CIRCULAR DUPLAMENTE ENCADEADA
é uma lista circular com encadeamento nulo
o que seria o ultimo nó da lista passa a ter como proximo o primeiro nó, que por sua vez, passa a ter o ultimo como anterior
com essa construção podemos percorrer a lista nos dois sentidos a partir de um ponteiro para um nó qualquer



FILAS
fila é uma estrutura de dados dinamica para manter nós no formato de uma fila onde o 1º nó que entra é o 1 que seria
é considerada uma estrutura do tipo FIFO
por ser implementada usando ARRAYS ou listas encadeadas

