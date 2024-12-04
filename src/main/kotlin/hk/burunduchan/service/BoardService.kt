package hk.burunduchan.service

import hk.burunduchan.dto.BoardDto
import hk.burunduchan.model.Board
import hk.burunduchan.repository.BoardRepository
import org.springframework.stereotype.Service

@Service
class BoardService(private val boardRepository: BoardRepository) {

    fun getAllBoards(): List<BoardDto> {
        return boardRepository.findAll().map { BoardDto(it.id, it.name) }
    }

    fun getThreadsByBoard(board: BoardDto): List<Board> {
        return boardRepository.findAllByBoard(board)
    }

    fun createBoard(boardName: String, id: String): BoardDto {
        val board = Board(name = boardName, id = id)
        val savedBoard = boardRepository.save(board)
        return BoardDto(savedBoard.id, savedBoard.name)
    }
}

