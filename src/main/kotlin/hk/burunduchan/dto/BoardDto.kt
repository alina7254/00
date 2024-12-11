package hk.burunduchan.dto

import kotlinx.serialization.Serializable

@Serializable
data class BoardDto(
    val id: Long = 0,
    val name: String,
)




