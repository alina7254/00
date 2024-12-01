package hk.burunduchan.controller

import hk.burunduchan.dto.BoardDto
import hk.burunduchan.service.BoardService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/boards")
class BoardController(private val boardService: BoardService) {

    @GetMapping
    fun getAllBoards(): ResponseEntity<List<BoardDto>> {
        val boards = boardService.getAllBoards()
        return ResponseEntity.ok(boards)
    }

    @PostMapping
    fun createBoard(@RequestBody boardDto: BoardDto): ResponseEntity<BoardDto> {
        val newBoard = boardService.createBoard(boardDto.name)
        return ResponseEntity.ok(newBoard)
    }

    @GetMapping("/{id}/threads")
    fun getThreadsByBoard(@PathVariable id: Int): ResponseEntity<List<Int>> {
        val posts = boardService.getThreadsByBoard(id)
        return ResponseEntity.ok(posts)
    }
}
