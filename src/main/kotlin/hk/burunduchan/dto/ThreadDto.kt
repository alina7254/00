package hk.burunduchan.dto

import java.time.LocalDateTime

data class ThreadDto(
    val id: Int,
    val title: String,
    val board: BoardDto,
    val blob: String? = null,
    val timestamp: LocalDateTime = LocalDateTime.now()
)

