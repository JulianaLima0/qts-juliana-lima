import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,   
} from "http://deno.land/std/testing/asserts.ts"

let aluno = 'Leo Naomi'
let professores = ['João', 'Bruno Cano', 'Eliana Sieg', 'Sandra']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "Leo Naomi");
    assertStringIncludes(aluno, "Leo");
})